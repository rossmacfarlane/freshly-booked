import firebase from "react-native-firebase";

const bookings = {
  getBookings: function(date) {
    var bookingsByDate = firebase
      .database()
      .ref("bookings/" + date)
      .orderByKey()
      .once()
      .then(snapshot => {
        const bookings = [];
        snapshot.forEach(child => {
          bookings.push(child.toJSON());
        });

        return bookings;
      });
  }
};

export default bookings;
