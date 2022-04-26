import React from "react";
import "../style/page.css";

export default function Login() {
    return (
        <section>
          <div class="team">
            <div class="card text-Secondary bg  border-dark mb-3 " >
              <div class="card-header border-dark "><b><h3 class="cent">Sign-up</h3></b></div>
              <div class="card-body">
                <form action='/submit' method="post" >
                        <div class="form-group">
                            <label for="Email">User Name :</label>
                            <input type="email" class="form-control" name="Email" id="Email" placeholder="user@gmail.com"/>
                        </div>
                        <div class="form-group">
                            <label for="pw">Password :</label>
                            <input type="password" class="form-control" placeholder="********" name="pw" id="pw"/>
                        </div>
                        <div >
                          <input type="submit" value="Submit" class="btn btn-success border-white "/>
                        </div>
                    </form>
              </div>
            </div>
          </div>
        </section>
    );
}