import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import LoggedInUserContext from "../context/logged-in-user";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  // get logged in users photos
  const { photos } = usePhotos(user);
  // on loading photos, use react skeleton
  // if there are photos, render them : post component
  // if there are no photos, tell them to create photos

  // console.log("photos", photos);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : photos.length ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <div className="text-center text-lg">
          Follow people to see photos!
        </div>
      )}
    </div>
  );
}
