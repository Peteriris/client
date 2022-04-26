import React from "react";
import "../style/page.css";

export default function Signup() {
    return (
        <section>
          <div class="team">
            <div class="card text-Secondary border-dark mb-3 " >
              <div class="card-header border-dark "><b><h3 class="cent">Sign-up</h3></b></div>
              <div class="card-body">
                <form action='/submit' method="post" >
                        <div class="form-group">
                            <label for="Email">User Name :</label>
                            <input type="email" class="form-control" name="Email" id="Email" placeholder="user@gmail.com"/>
                        </div>
                        <div class="form-group">
                            <label for="pw">Password :</label>
                            <input type="password" class="form-control" name="pw" id="pw"/>
                        </div>
                        <div class="form-group">
                            <label for="last_name">Name :</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                        </div>
                        <div >
                          <input type="submit" value="Submit" class="btn btn-success "/>
                        </div>
                    </form>
              </div>
            </div>
          </div>
        </section>
    );
}