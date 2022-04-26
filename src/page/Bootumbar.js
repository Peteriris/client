import React from "react";
import "../style/page.css";

export default function Bootumbar() {
  return (
    <div className="botbar">
        <div className="bottbarWrapper">
            <div className="bottRight">
                <span className="blogo">Powered by :....... </span>
            </div>
            <div className="botRight ">

                <form class="form-inline" method="post" action="">
                    <div class="form-group mx-sm-3 mb-2">
                        <input type="search" name="search" placeholder="Search"/>
                    </div>
                    <input type="submit" class="btn btn-primary mb-2" name="ok" value="Button"/>
                </form>
            </div>
        </div>
   </div>
  );
}