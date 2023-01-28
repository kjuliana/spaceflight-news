import React, {useState} from 'react';
import PostForm from "../PostForm/PostForm";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/MyButton/MyButton";
import styles from './AddPostButton.module.css';

const AddPostButton = ({createPost}) => {
    const [modal, setModal] = useState(false);

    function create(...args) {
        createPost(...args);
        setModal(false);
    }

    return (
        <div className={styles.root} >
            <MyButton style={{padding: "0 15px"}} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={create}/>
            </MyModal>
        </div>
    );
};

export default AddPostButton;