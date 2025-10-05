// src/component/About.js
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDetails: {
        creator: "Aqib Naqvi",
        location: "Kanpur",
        purpose: "to create a seamless food ordering experience.",
      },
    };
  }

  render() {
    const { creator, location, purpose } = this.state.projectDetails;

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About This Project
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              My Journey
            </h2>
            <p className="text-gray-600 mb-4">
              Hi, I’m {creator}, the sole creator of this food ordering app. I
              built this project single-handedly from my home in {location}.
              This is a passion project born out of my love for coding and good
              food.
            </p>
            <p className="text-gray-600">
              My goal was {purpose} I’ve worked hard to design and develop every
              feature—from the restaurant listings to the cart system—all by
              myself. It’s been a challenging yet rewarding journey!
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Who’s Logged In?
            </h2>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <p className="text-gray-600">
                  Currently logged in as:{" "}
                  <span className="font-bold">{loggedInUser}</span>
                </p>
              )}
            </UserContext.Consumer>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;  


