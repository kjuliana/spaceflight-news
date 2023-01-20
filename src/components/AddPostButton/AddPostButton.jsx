import React, {useState} from 'react';
import PostForm from "../PostForm/PostForm";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";

const AddPostButton = ({createPost}) => {
    const [modal, setModal] = useState(false);

    function create(...args) {
        createPost(...args);
        setModal(false);
    }

    return (
        <>
            <MyButton onClick={() => setModal(true)} >
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={create}/>
            </MyModal>
        </>
    );
};

export default AddPostButton;