import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const QUERY = gql`
  mutation Tambah(
    $creatorId: ID!
    $title: String
    $description: String
  ) {
    addProject(
      creatorId: $creatorId
      title: $title
      description: $description
    ) {
      title
    }
  }
`;

const QUERY_USER = gql`
  mutation TambahUser(
    $username: String
    $email: String
  ) {
    addUser(
      username: $username
      email: $email
    ) {
      username
    }
  }
`;

function Tampil() {
  let ci, t, d;
  const [simpan, { data }] = useMutation(QUERY);

  let username, email;
  const [simpan_user, data_user] = useMutation(QUERY_USER);
  return (
    <Fragment>
      <form
        onSubmit = {
          e => {
            e.preventDefault();
            simpan({
              variables:{
                creatorId: ci.value,
                title: t.value,
                description: d.value
              }
            })
            ci.value = '';
            t.value = '';
            d.value = '';
          }
        }
      >
        <fieldset>
          <h1>Mutasi db Project</h1>
          <div className="form-group">
            <label htmlFor="creatorID">Creator ID</label>
            <input type="text" className="form-control" id="creatorID"
              ref={node => {
                ci = node;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title"
              ref={node => {
                t = node;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description"
              ref={node => {
                d = node;
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Project</button>
        </fieldset>
      </form>
      <br/><br/><br/>
      <form
        onSubmit = {
          e => {
            e.preventDefault();
            simpan_user({
              variables:{
                username: username.value,
                email: email.value
              }
            })
            username.value = '';
            email.value = '';
          }
        }
        >
        <fieldset>
          <h1>Mutasi db User</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username"
              ref={node => {
                username = node;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email"
              ref={node => {
                email = node;
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit User</button>
        </fieldset>
      </form>
    </Fragment>
  );
}

export class Postgres extends Component {
  render() {
    return (
      <Fragment>
        <Tampil />
      </Fragment>
    );
  }
}

export default Postgres;
