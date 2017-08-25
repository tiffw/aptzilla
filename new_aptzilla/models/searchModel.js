module.exports = function(sequelize, DataTypes) {
  var Apartment = sequelize.define("Apartment", {
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    }, 
    zip: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.STRING
    },
    long: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    }
  });
  return Apartment;
};