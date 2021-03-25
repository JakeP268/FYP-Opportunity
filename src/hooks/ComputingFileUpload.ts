import { useState, useEffect } from "react";
import * as firebase from "firebase";
import "../firebaseSetup";

interface UploadDataResponse {
  metaData: firebase.storage.FullMetadata;
  downloadUrl: any;
}
interface ProgressResponse {
  value: number;
}

const storageRef = firebase.storage().ref();

function FirebaseFileUploadApi(): [
  {
    data: UploadDataResponse | undefined;
    isLoading: boolean;
  },
  Function
] {
  const [data, setData] = useState<UploadDataResponse | undefined>();

  const [fileData, setFileData] = useState<File | null>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const uploadData = async () => {
      setIsLoading(true);

      if (!fileData) return;

      try {
        let fName = `${new Date().getTime()}-${fileData.name}`;

        let ref = storageRef.child("Computing/" + fName);
        let uploadTask = ref.put(fileData);

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (_progress) => {
            var value = _progress.bytesTransferred / _progress.totalBytes;
            console.log("CV upload is " + value * 100 + "% done");
          },
          (_error) => {
            setIsLoading(false);
          },
        );
      } catch (_error) {
        setIsLoading(false);
      }
    };

    fileData && uploadData();
  }, [fileData]);

  return [{ data, isLoading }, setFileData];
}

export default FirebaseFileUploadApi;
