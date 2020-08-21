import React from "react";
import { Link } from "react-router-dom";

import color from "../styles/_colors";
import { HomeContainer } from "./Home.Styles";

export default function Home() {
  return (
    <HomeContainer>
      <h1>Welcome to Cycle Mate!</h1>
      <p>
        Cycle Mate is the perfect platform for cycle lovers who enjoy practising
        their favourite sport together with other people.{" "}
      </p>
      <p>
        Ever wanted to organize a cycle trip and make it possible for anyone to
        join, just for the fun of riding together? Cycle Mate is your new best
        mate!
      </p>{" "}
      <p>
        {" "}
        Organize cycle trips, join other people's trips, take part in the Cycle
        Mate community and ask questions or share your experiences on the
        message board... Anything to spread the love for cycling!
      </p>
      <p>
        Sign up{" "}
        <Link
          to="/signup"
          style={{ color: `${color.darklila}`, fontWeight: "bold" }}
        >
          here
        </Link>
        !
      </p>
      <img
        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/11/18/cycling-guide.jpg?width=990"
        alt="Cycle Mate"
      />
    </HomeContainer>
  );
}

// alternative images
// http://4.bp.blogspot.com/-u38K3knfMRM/UbCLjW2OWQI/AAAAAAAAAFI/NtDvNK0yTYk/s1600/why-bike_main.jpg
// https://cdn1.cyclist.co.uk/sites/cyclist/files/styles/article_main_wide_image/public/2017/04/ofo.png?itok=SGrRL2aP
// https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/11/18/cycling-guide.jpg?width=990
// https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/into-the-sunset-royalty-free-image-1587501795.jpg?crop=0.590xw:1.00xh;0.131xw,0&resize=980:*
// https://www.bikemagazine.com.br/wp-content/uploads/2012/02/primeira-bike1.jpg
// https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/08/GettyImages-168831316-650x428.jpg
// https://i.pinimg.com/originals/6d/10/40/6d10406122213c72b2edd0cf6a985b51.jpg
