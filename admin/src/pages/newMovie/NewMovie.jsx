import React, { useState } from "react";
import storage from "../../firebase";
import "./newMovie.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `items/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, item.file); // Upload the file.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done.`);
        },
        (error) => {
          // TODO: Handle unsuccessful uploads.
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return {...prev, [item.label]: url};
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  return (
    <div className="newMovie">
      <h1 className="newUser">New Movie</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            placeholder="title"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Title Image</label>
          <input
            type="file"
            placeholder="title"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Thumbnail</label>
          <input
            type="file"
            placeholder="title"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Title</label>
          <input type="text" placeholder="title" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="gender"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Is Series?</label>
          <select
            name="isSerries"
            id="isSerries"
            className="newUserSelect"
            onChange={handleChange}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="newUserButton">Create</button>
        ) : (
          <button className="newUserButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};
