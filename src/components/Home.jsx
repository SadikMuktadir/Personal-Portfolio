import { useEffect } from "react";
import Banner from "./Banner";
import MyExperience from "./MyExperience";
import MyServices from "./MyServices";
import WhyHire from "./WhyHire";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceMobile from "./ServiceMobile";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const uploadFile = () => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
      alert("No file selected!");
      return;
    }

    const storageRef = ref(storage, "uploads/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <div data-aos="zoom-in">
        <Banner />
      </div>
      <div className="hidden lg:block" data-aos="zoom-in">
        <MyServices />
      </div>
      <div className="block lg:hidden" data-aos="zoom-in">
        <ServiceMobile />
      </div>
      <div data-aos="zoom-in">
        <MyExperience />
      </div>
      <div data-aos="zoom-in">
        <WhyHire />
      </div>
      <div>
        <input type="file" id="fileInput" />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
};

export default Home;
