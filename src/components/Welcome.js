import React from "react";
import "../style/page.css";

export default function Welcome() {
  return (
    <section>
      <div className="pt-5 ">
        <div class="container col-lg-4 pt-5 mt-3 border ps-4">
          <div class="row ">
            <div class="col">
              <div class="p-3 ">
                <h1 class="text-primary col col-lg-2 ">Welcome </h1>
              </div>
              <div>
                <p>Your are scussfully Login </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}