import { useAppDispatch, useAppSelector } from 'features';
import { selectActiveObjectId, setIsEditingExistingObjectBeforeVerification } from 'features/objects';
import { ChangeEvent, useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ObjectIcon } from './ObjectIcon';
import documentsIcon from 'assets/images/createObject/documents.png';

import camera from 'assets/images/createObject/camera.svg';
import toast from 'react-hot-toast';
import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Link as RouterLink } from 'react-router-dom';
import { ROOT } from 'navigation/CONSTANTS';

// https://mimetype.io/video/x-msvideo
const videoTypes = [
  'video/h264', // HEVC (h265)
  'video/mp4',
  'video/webm', // .WebM
  'video/x-msvideo', // .avi
  'video/x-flv', // .FLV
  'video/quicktime', // .mov
  'video/x-ms-wmv', //.WMV
  'video/3gpp', // .3GPP deprecated
  'video/h261',
  'video/h263',
  'video/mpeg',
  'video/mpeg2',
  'video/ogg',
  'video/mp2t',
  'video/3gpp2',
  'video/3gp2',
  'video/m2ts',
  'video/annodex',
  'video/x-m4v',
  'video/x-mpeg2',
  'video/x-m2ts',
  'application/x-mpegURL',
];

const allowedVideoTypes = videoTypes.join(', ');

const imageTypes = [
  //
  'image/webp',
  'image/jpeg',
  'image/png',
  'image/avif',
  'image/bmp',
  'image/tiff',
];

const allowedImageTypes = imageTypes.join(', ');

const documentTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/vnd.oasis.opendocument.text', // .odt
  'application/rtf', // .rtf
];

const allowedDocumentTypes = documentTypes.join(', ');

const allowedCombinedTypes = `${allowedImageTypes}, ${allowedDocumentTypes}`;

type DocumentStatsProps = { fileName: string; fileSize: string };
const DocumentStats = ({ fileName, fileSize }: DocumentStatsProps) =>
  fileName ? (
    <li className="lastcontent-document-button__thumb">
      <div className="lastcontent-document-button__thumb__slack-icon">
        <ObjectIcon className="lastcontent-document-button__thumb-icon" iconId="files" />
      </div>

      <p className="lastcontent-document-button-text">{fileSize} Kb</p>
      <p className="lastcontent-document-button-text">{fileName}</p>
    </li>
  ) : null;

type ObjectAddDocumentsProps = {
  times: [number, number];
  setFinishTime: () => void;
};

const Link = ({ to = ROOT, text }: { to?: string; text: string }) => (
  <RouterLink to={to} className="lastcontent-head-link" rel="noreferrer noopener" target="_blank">
    {text}
  </RouterLink>
);

type VideoResult = { id: EntityId; file?: File };
type FileEntity = EntityState<VideoResult>;

const videoInitState: FileEntity = {
  ids: ['0', '1', '2'],
  entities: {
    '0': { id: '0', file: undefined },
    '1': { id: '1', file: undefined },
    '2': { id: '2', file: undefined },
  },
};

type FileReaderResult = { id: EntityId; file?: File; result?: string | ArrayBuffer | null };
type FileReaderResultEntity = EntityState<FileReaderResult>;

const initState: [] = [];
const initStatePreview: FileReaderResultEntity = {
  ids: ['0', '1', '2'],
  entities: {
    '0': { id: '0', file: undefined },
    '1': { id: '1', file: undefined },
    '2': { id: '2', file: undefined },
  },
};

export const ObjectAddDocuments = ({ times, setFinishTime }: ObjectAddDocumentsProps) => {
  const { t } = useTranslation();

  const activeObjectId = useAppSelector(selectActiveObjectId);

  const appDispatch = useAppDispatch();

  const openPrevTab = useCallback(() => {
    if (!activeObjectId) return;

    appDispatch(setIsEditingExistingObjectBeforeVerification(true));
  }, [activeObjectId, appDispatch]);

  const [okay, setOkay] = useState(false);

  const [videos, setVideos] = useState<FileEntity>(videoInitState);
  const [videosPreview, setVideosPreview] = useState<FileReaderResultEntity>(initStatePreview);
  const [documents, setDocuments] = useState<File[]>(initState);
  const [selfies, setSelfies] = useState<File[]>(initState);

  const checkLink = useCallback((evn: ChangeEvent<HTMLInputElement>) => {
    const realEstateRightsUrl = evn.target.value;
    if (!realEstateRightsUrl.includes('http')) {
      setOkay(false);
      return;
    }

    setOkay(true);
  }, []);

  const onChangeSetFileName = useCallback(
    (evn: ChangeEvent<HTMLInputElement>) => {
      const input = evn.target;
      const { files, name } = input;
      if (!files?.[0] || !name) return;

      const { length } = files;

      const { type } = files[0];

      switch (name) {
        case 'objectVideos': {
          if (!type.includes('video')) return;

          const values = Object.values(videos.entities);

          if (length > 3 || values.some(video => Number(video?.file?.size) > 10 * 1000 ** 3)) {
            toast.error('You may only upload a maximum of 3 videos, each 10 GB max');
            return;
          }

          const newVideos = Array.from(files);

          newVideos.forEach((newVideo, i) => {
            const reader = new FileReader();

            reader.onload = () => {
              if (reader.readyState === 2) {
                setVideos(prev => ({
                  ...prev,
                  entities: {
                    ...prev.entities,
                    [i]: { ...prev.entities[i], id: i, file: newVideo },
                  },
                }));
              }
            };

            reader.onloadstart = () => {
              setVideosPreview(prev => ({
                ...prev,
                ids: [...prev.ids],
                entities: {
                  ...prev.entities,
                  [i]: { ...prev.entities[i], id: i, file: newVideo, result: undefined },
                },
              }));
            };

            reader.onloadend = () => {
              setVideosPreview(prev => ({
                ...prev, // do not update id, only result in objects
                entities: {
                  ...prev.entities,
                  [i]: { ...prev.entities[i], id: i, file: newVideo, result: reader.result },
                },
              }));
            };

            if (newVideo) {
              reader.readAsDataURL(newVideo);
            }
          });

          return;
        }

        case 'realEstateRightsPhoto': {
          if (!type.includes('image') && !type.includes('application')) return;

          if (length + documents.length > 20 || documents.some(doc => doc.size > 40 * 1000 ** 2)) {
            toast.error('You may only upload a maximum of 20 documents, each 40 MB max');
            return;
          }

          setDocuments(prev => [...prev, ...files]);
          return;
        }

        case 'realEstateManagerSelfieWithDocuments': {
          if (!type.includes('image') && !type.includes('application')) return;

          if (length + selfies.length > 5 || selfies.some(selfie => selfie.size > 10 * 1000 ** 2)) {
            toast.error('You may only upload a maximum of 5 selfies with documents, each 10 MB max');
            return;
          }

          setSelfies(prev => [...prev, ...files]);
          return;
        }

        default:
          return;
      }
    },
    [documents, selfies, videos]
  );

  const minutes = ((times[1] - times[0]) / 1000 / 60).toFixed(0);

  useEffect(() => {
    if (times[1]) return;

    setFinishTime();
  }, [times, setFinishTime]);

  const objectIsAddedTitle = `${t('excellent')} 👍 ${t('youAddedObject')}`;

  const link = 'https://www';
  const pageWillBeActiveAtThisLink = `${t('thisPageWillBeActiveUntilVerification')} ${link}`;

  const objectAddingDuration = `${t('addingObjectTook')} ${minutes} ${t('minutesShort')}`;

  return (
    <div className="lastcontent-bg">
      <section className="lastcontent">
        <div className="lastcontent__info">
          <h1 className="lastcontent__info-head">{objectIsAddedTitle}</h1>

          <ul className="lastcontent__info-list">
            <li className="lastcontent__info-item">
              <span className="lastcontent__info-span">
                <ObjectIcon className="lastcontent__info-icon" iconId="verific" />
              </span>

              <div>
                <p className="lastcontent__info-title">{t('verificationStarted')}</p>
                <p className="lastcontent__info-text">{t('verifierWillContactYou')}</p>
              </div>
            </li>

            <li className="lastcontent__info-item">
              <span className="lastcontent__info-span">
                <ObjectIcon className="lastcontent__info-icon" iconId="www" />
              </span>

              <p className="lastcontent__info-text">{pageWillBeActiveAtThisLink}</p>
            </li>

            <li className="lastcontent__info-item">
              <span className="lastcontent__info-span">
                <ObjectIcon className="lastcontent__info-icon" iconId="correct" />
              </span>

              <p className="lastcontent__info-text">{t('youMayEditObjectDuringVerification')}</p>
            </li>

            <li className="lastcontent__info-item">
              <span className="lastcontent__info-span">
                <ObjectIcon className="lastcontent__info-icon" iconId="Clock" />
              </span>

              <p className="lastcontent__info-text-elapsed-time">{objectAddingDuration}</p>
            </li>

            <li className="lastcontent__info-item">
              <span className="lastcontent__info-span">
                <div className="lastcontent__info-icon" />
              </span>

              <p className="lastcontent__info-text-last">{t('separatePageIsCreatedForObject')}</p>
            </li>
          </ul>

          <button className="lastcontent__info-button">
            <ObjectIcon className="lastcontent__info-button-icon" iconId="add" />
            <span>{t('addBookingOption')}</span>
          </button>

          <button className="lastcontent__info-buttonLeft" onClick={openPrevTab}>
            <ObjectIcon className="selecthouse-listDirection-iconLeft active" iconId="right" />
          </button>
        </div>
      </section>

      <div className="lastcontent-document">
        <h2 className="lastcontent-head">
          {t('addObjectInfo')}

          <p className="lastcontent-head-span">
            {t('youCanRead')} <Link to={ROOT} text={t('privacyPolicy')} /> {t('and')}{' '}
            <Link to={ROOT} text={t('userAgreement')} />
          </p>
        </h2>

        <ul className="lastcontent-document-list">
          <li className="lastcontent-document-item">
            <div className="fixed-height">
              <div className="lastcontent-icon-thumb">
                <img className="lastcontent-document-icon" src={camera} alt="camera" />
              </div>
              <h2 className="lastcontent-document-head">{t('objectVideo')}</h2>
              <p className="lastcontent-document-text">{t('objectVideoRequirements')}</p>
              <div className="lastcontent-document-button">
                <span> {t('addObjectVideo')}</span>
                <label className="lastcontent-document-button-label">
                  <input
                    type="file"
                    name="objectVideos"
                    onChange={onChangeSetFileName}
                    className="lastcontent-document-button-input"
                    multiple={true}
                    accept={allowedVideoTypes}
                  />
                </label>
              </div>
            </div>

            <ul className="lastcontent-videos-container">
              {videosPreview.ids.map(previewId => {
                const videoPreview = videosPreview?.entities?.[previewId];

                if (!videoPreview) return null;

                const { result, file } = videoPreview;

                if (!result || typeof result !== 'string' || !file) return null;

                const { name, size } = file;

                const key = `${name}-${previewId}`;
                const title = `${name} - ${Math.round(size / 1000 ** 2)} MB`;

                return (
                  <li key={key}>
                    <p className="lastcontent-document-button-text">{title}</p>

                    <video src={result} width="100%" autoPlay={false} title={title} controls>
                      {size}
                    </video>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="lastcontent-document-item">
            <div className="fixed-height">
              <div className="lastcontent-icon-thumb">
                <img className="lastcontent-document-icon" src={documentsIcon} alt="documents" />
              </div>

              <h2 className="lastcontent-document-head">{t('addObjectDocuments')} </h2>

              <p className="lastcontent-document-text">{t('objectPhotoOrLinkToRegister')}</p>

              <div className="lastcontent-document-button">
                <span>{t('addObjectPhoto')}</span>

                <label className="lastcontent-document-button-label">
                  <input
                    type="file"
                    name="realEstateRightsPhoto"
                    onChange={onChangeSetFileName}
                    className="lastcontent-document-button-input"
                    multiple={true}
                    accept={allowedCombinedTypes}
                  />
                </label>
              </div>
            </div>

            <div className="lastcontent-document-thumb">
              <input
                type="url"
                name="realEstateRightsUrl1"
                className="lastcontent-document-input"
                placeholder={t('pasteLinkHere')}
                onChange={checkLink}
              />
              <ObjectIcon className={`lastcontent-document-input-span ${okay ? 'active' : ''}`} iconId="galka" />
            </div>
            <div className="lastcontent-document-thumb">
              <input
                type="url"
                name="realEstateRightsUrl2"
                className="lastcontent-document-input"
                placeholder={t('pasteLinkHere')}
                onChange={checkLink}
              />
              <ObjectIcon className={`lastcontent-document-input-span ${okay ? 'active' : ''}`} iconId="galka" />
            </div>
            <div className="lastcontent-document-thumb">
              <input
                type="url"
                name="realEstateRightsUrl3"
                className="lastcontent-document-input"
                placeholder={t('pasteLinkHere')}
                onChange={checkLink}
              />
              <ObjectIcon className={`lastcontent-document-input-span ${okay ? 'active' : ''}`} iconId="galka" />
            </div>
            <div className="lastcontent-document-thumb">
              <input
                type="url"
                name="realEstateRightsUrl4"
                className="lastcontent-document-input"
                placeholder={t('pasteLinkHere')}
                onChange={checkLink}
              />
              <ObjectIcon className={`lastcontent-document-input-span ${okay ? 'active' : ''}`} iconId="galka" />
            </div>
            <div className="lastcontent-document-thumb">
              <input
                type="url"
                name="realEstateRightsUrl5"
                className="lastcontent-document-input"
                placeholder={t('pasteLinkHere')}
                onChange={checkLink}
              />
              <ObjectIcon className={`lastcontent-document-input-span ${okay ? 'active' : ''}`} iconId="galka" />
            </div>

            <ul className="lastcontent-images-container">
              {documents.map(({ name, size }, i) => (
                <DocumentStats key={`${name}${i}`} fileName={name} fileSize={`${Math.round(size / 1000)}`} />
              ))}
            </ul>
          </li>

          <li className="lastcontent-document-item">
            <div className="fixed-height">
              <div className="lastcontent-icon-thumb">
                <ObjectIcon className="lastcontent-document-icon" iconId="selfi" />
              </div>

              <h2 className="lastcontent-document-head">{t('addObjectSelfieWithDocument')}</h2>

              <p className="lastcontent-document-text">{t('addObjectSelfieRequirements')}</p>

              <div className="lastcontent-document-button">
                <span>{t('addObjectSelfie')}</span>

                <label className="lastcontent-document-button-label">
                  <input
                    type="file"
                    name="realEstateManagerSelfieWithDocuments"
                    data-score="3"
                    onChange={onChangeSetFileName}
                    className="lastcontent-document-button-input"
                    multiple={true}
                    accept={allowedCombinedTypes}
                  />
                </label>
              </div>
            </div>

            <ul className="lastcontent-images-container">
              {selfies.map(({ name, size }, i) => (
                <DocumentStats key={`${name}${i}`} fileName={name} fileSize={`${Math.round(size / 1000)}`} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
