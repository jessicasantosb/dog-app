import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './PhotoComments.module.css';
import PhotoCommentsForm from './PhotoCommentsForm';

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <div className={styles.content}>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID} className={styles.comment}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login ? (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      ) : (
        <p className={styles.message}>
          Faça o{' '}
          <Link to={'/login'} className={styles.link}>
            Login
          </Link>{' '}
          para deixar seu comentário
        </p>
      )}
    </div>
  );
}

export default PhotoComments;
