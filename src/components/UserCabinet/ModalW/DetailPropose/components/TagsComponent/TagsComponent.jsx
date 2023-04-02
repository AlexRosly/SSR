import s from './TagsComponent.module.scss';

export const TagsComponent = ({ tags, color }) => (
  <div className={s.container}>
    {tags.map((tag, id) => (
      <div key={id} className={s.description} style={{ color }}>
        {tag}
      </div>
    ))}
  </div>
);
