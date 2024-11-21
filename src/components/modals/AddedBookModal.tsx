import SmallModal from "./base/SmallModal";

const AddedBookModal = () => {
  return (
    <SmallModal
      imgSrc="/images/goodJob.png"
      text={
        <>
          Your book is now in <span>the library!</span> The joy knows no bounds
          and now you can start your training
        </>
      }
      title={"Good job"}
    />
  );
};

export default AddedBookModal;
