import type { ChangeEvent } from 'react';
import type { EntityId } from '@reduxjs/toolkit';
import { useMemo, useRef, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from 'features';
import { ObjectIcon } from './ObjectIcon';
import { imageTypeError, isImageType, supportedImageMimeTypes } from './isImage';
import {
  deleteObjectPhoto,
  initObjectPhotos,
  selectActiveObjectId,
  selectObjectEditedFields,
  selectObjectPhotoById,
  selectObjectPhotosLocalUrls,
  selectObjectStatus,
  setObjectEditedFields,
  setObjectStatus,
  updateObjectPhoto,
} from 'features/objects';
import { useGetHotelQuery } from 'features/hotels';
import { useTranslation } from 'react-i18next';
import { LocalPhoto } from 'types';

const PHOTOS_IDS_PARALLEL_TO_MAIN_PHOTO = initObjectPhotos.ids.slice(1, 5);
const PHOTOS_IDS_BELOW_MAIN_PHOTO = initObjectPhotos.ids.slice(5);

type ObjectPhotoProps = {
  objectPhotoId: EntityId;
  addPhoto: (e: ChangeEvent<HTMLInputElement>, objectPhotoId: EntityId) => void;
  deletePhoto: (objectPhotoId: EntityId, objectPhotoLocalUrl: string) => Promise<void>;
};

type DeletePhotoButtonProps = { deletePhoto: () => void };

export const DeletePhotoButton = ({ deletePhoto }: DeletePhotoButtonProps) => (
  <button onClick={deletePhoto} className="selectphoto-button-delete" type="button">
    <span className="visually-hidden">delete photo</span>
    <ObjectIcon className="object__window-icon" iconId="Close" ariaHidden />
  </button>
);

/*

    TODO: update video preview in AddObjectDocument with following code:

    const video = document.getElementById('video');
    const obj_url = URL.createObjectURL(blob);
    video.src = obj_url;
    video.play();
    URL.revokeObjectURL(obj_url);
    */

// export const PhotosDropBox = () => {
//   const dropBoxRef = useRef<HTMLInputElement | null>(null);

//   const onDragEnter = useCallback((e: DragEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }, []);

//   const onDragOver = useCallback((e: DragEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }, []);

//   const onDrop = useCallback((e: DragEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     handleFiles(e.dataTransfer.files);
//   }, []);

//   return (
//     <div>
//       <label className="photos-dropbox-label">
//         <input
//           className="visually-hidden"
//           type="file"
//           multiple
//           onDragEnter={onDragEnter}
//           onDragOver={onDragOver}
//           onDrop={onDrop}
//           ref={dropBoxRef}
//         />
//       </label>
//     </div>
//   );
// };

const usePhotoFns = ({
  objectPhotoId,
  addPhoto,
  deletePhoto,
}: {
  objectPhotoId: EntityId;
  addPhoto: (e: ChangeEvent<HTMLInputElement>, objectPhotoId: EntityId) => void;
  deletePhoto: (objectPhotoId: EntityId, objectPhotoLocalUrl: string) => Promise<void>;
}) => {
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const photo = useAppSelector(state => selectObjectPhotoById(state, objectPhotoId));

  const objectEditedFields = useAppSelector(selectObjectEditedFields);
  const arePhotosEdited = objectEditedFields.includes('photos');

  const { objectPhotoUrlFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({
      objectPhotoUrlFromBackend: data?.entities?.[activeObjectId]?.photos?.[Number(objectPhotoId)],
    }),
    skip: !activeObjectId,
  });

  const isLocalFile = photo && 'localUrl' in photo;

  const displayedObjectPhotoUrl =
    (isLocalFile && !objectPhotoUrlFromBackend) || (isLocalFile && objectPhotoUrlFromBackend && arePhotosEdited)
      ? photo.localUrl
      : objectPhotoUrlFromBackend?.url;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeAddPhoto = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      addPhoto(e, objectPhotoId);
    },
    [addPhoto, objectPhotoId]
  );

  const onClickDeletePhoto = useCallback(() => {
    if (!displayedObjectPhotoUrl) return;
    deletePhoto(objectPhotoId, displayedObjectPhotoUrl);
  }, [deletePhoto, objectPhotoId, displayedObjectPhotoUrl]);

  useEffect(() => {
    if (displayedObjectPhotoUrl || !inputRef.current) return;
    inputRef.current.value = '';
  }, [displayedObjectPhotoUrl]);

  return useMemo(
    () => ({ inputRef, onChangeAddPhoto, onClickDeletePhoto, displayedObjectPhotoUrl }),
    [onChangeAddPhoto, onClickDeletePhoto, displayedObjectPhotoUrl]
  );
};

const MainPhoto = ({ objectPhotoId, addPhoto, deletePhoto }: ObjectPhotoProps) => {
  const { t } = useTranslation();

  const { inputRef, onChangeAddPhoto, onClickDeletePhoto, displayedObjectPhotoUrl } = usePhotoFns({
    objectPhotoId,
    addPhoto,
    deletePhoto,
  });

  const showButtonsOverlay = displayedObjectPhotoUrl && <DeletePhotoButton deletePhoto={onClickDeletePhoto} />;

  const mainPhotoImageOrPlaceholderText = displayedObjectPhotoUrl ? (
    <img src={displayedObjectPhotoUrl} className="selectphoto-image mainPhoto" alt="mainObjectPhoto" />
  ) : (
    <>
      <ObjectIcon className="selectphoto-mainPhotoButton-icon" iconId="plusHead" ariaHidden />
      <p className="selectphoto-mainPhotoButton-text">{t('objectMainPhoto')}</p>
    </>
  );

  const isActive = displayedObjectPhotoUrl ? 'active' : '';

  return (
    <div className="selectphoto-mainPhotoButton">
      <label className={`selectphoto-mainPhoto-label ${isActive}`}>
        <span className="visually-hidden">{t('addObjectImageToUpload')}</span>

        <input
          type="file"
          name="uploadMainObjectPhoto"
          className="visually-hidden"
          onChange={onChangeAddPhoto}
          accept={supportedImageMimeTypes}
          ref={inputRef}
        />

        {mainPhotoImageOrPlaceholderText}
      </label>

      {showButtonsOverlay}
    </div>
  );
};

const ObjectPhotoItem = ({ objectPhotoId, addPhoto, deletePhoto }: ObjectPhotoProps) => {
  const { t } = useTranslation();

  const { inputRef, onChangeAddPhoto, onClickDeletePhoto, displayedObjectPhotoUrl } = usePhotoFns({
    objectPhotoId,
    addPhoto,
    deletePhoto,
  });

  const showButtonsOverlay = displayedObjectPhotoUrl && <DeletePhotoButton deletePhoto={onClickDeletePhoto} />;

  const labelClass = `selectphoto-label ${displayedObjectPhotoUrl ? 'active' : ''}`;

  const imageOrPlusIcon = displayedObjectPhotoUrl ? (
    <img src={displayedObjectPhotoUrl} className="selectphoto-image" alt={`objectPhoto${objectPhotoId}`} />
  ) : (
    <ObjectIcon className="selectphoto-button-icon" iconId="plushome" ariaHidden />
  );

  const onePerRow = objectPhotoId === '1' || objectPhotoId === '2' ? 'onePhotoPerRow' : '';
  const liClassName = `selectphoto-list-item ${onePerRow}`;

  return (
    <li className={liClassName}>
      <label className={labelClass}>
        <span className="visually-hidden">{t('addObjectImageToUpload')}</span>

        <input
          type="file"
          name={`uploadObjectPhotoInput${objectPhotoId}`}
          className="visually-hidden"
          onChange={onChangeAddPhoto}
          accept={supportedImageMimeTypes}
          ref={inputRef}
        />

        {imageOrPlusIcon}
      </label>

      {showButtonsOverlay}
    </li>
  );
};

export const ObjectAddPhotos = () => {
  const { t } = useTranslation();

  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const objectPhotosLocalUrls = useAppSelector(selectObjectPhotosLocalUrls);

  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const { objectPhotosFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectPhotosFromBackend: data?.entities?.[activeObjectId]?.photos }),
    skip: !activeObjectId,
  });

  const arePhotosEdited = objectEditedFields.includes('photos');

  const displayedObjectPhotos =
    !objectPhotosFromBackend || (objectPhotosFromBackend && arePhotosEdited)
      ? objectPhotosLocalUrls
      : objectPhotosFromBackend;

  const appDispatch = useAppDispatch();

  /** This function is to add or edit photo */
  const addPhoto = useCallback(
    (e: ChangeEvent<HTMLInputElement>, objectPhotoId: EntityId) => {
      e.preventDefault();
      const image = e.currentTarget.files?.[0];

      if (!image) return;

      if (!isImageType(image.type)) {
        toast(imageTypeError(image.type));
        return;
      }

      const localUrl = window.URL.createObjectURL(image);
      const newImage: LocalPhoto = { _id: objectPhotoId, position: `${objectPhotoId}`, localUrl };

      try {
        appDispatch(updateObjectPhoto(newImage));
        toast.success('Image added locally');

        // for editing functionality
        if (!objectPhotosFromBackend || arePhotosEdited) return;
        appDispatch(setObjectEditedFields([...objectEditedFields, 'photos']));
      } catch (error) {
        window.URL.revokeObjectURL(localUrl);
        toast.error('Error: Image not added. Local url revoked.');
      }
    },
    [objectPhotosFromBackend, objectEditedFields, arePhotosEdited, appDispatch]
  );

  const deletePhoto = useCallback(
    async (objectPhotoId: EntityId, objectPhotoUrlLocalOrFromBackend: string) => {
      try {
        // TODO: replace with RTK Query
        // await deletePhotoInCloudinaryMutation(objectToken, objectPhotoId)

        if (objectPhotoUrlLocalOrFromBackend.startsWith('blob')) {
          window.URL.revokeObjectURL(objectPhotoUrlLocalOrFromBackend);
        }

        appDispatch(deleteObjectPhoto(objectPhotoId));

        toast.success('Image removed locally');

        // for editing functionality
        if (!objectPhotosFromBackend || arePhotosEdited) return;
        appDispatch(setObjectEditedFields([...objectEditedFields, 'photos']));
      } catch (error) {
        //
      }
    },
    [objectPhotosFromBackend, arePhotosEdited, objectEditedFields, appDispatch]
  );

  useEffect(() => {
    if (displayedObjectPhotos.length) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [displayedObjectPhotos.length, status, appDispatch]);

  return (
    <section className="selectlocation-section">
      <div className="selectphoto">
        <h3 className="selectlocation-text">
          {t('addObjectPhotoTitle')}
          <br />
          {t('objectPhotoRequiredFormat')}
        </h3>

        <div className="selectphoto-container">
          <ul className="selectphoto-list">
            {PHOTOS_IDS_PARALLEL_TO_MAIN_PHOTO.map(objectPhotoId => (
              <ObjectPhotoItem
                key={objectPhotoId}
                objectPhotoId={objectPhotoId}
                addPhoto={addPhoto}
                deletePhoto={deletePhoto}
              />
            ))}
          </ul>

          <MainPhoto key="0" objectPhotoId="0" addPhoto={addPhoto} deletePhoto={deletePhoto} />
        </div>

        <ul className="selectphoto-list2">
          {PHOTOS_IDS_BELOW_MAIN_PHOTO.map(objectPhotoId => (
            <ObjectPhotoItem
              key={objectPhotoId}
              objectPhotoId={objectPhotoId}
              addPhoto={addPhoto}
              deletePhoto={deletePhoto}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
