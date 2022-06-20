const { DataTypes } =  require('sequelize');

module.exports = (sequelize) => {

     return sequelize.define('Tasks', {
          name: {
               type: DataTypes.STRING,
               allowNull: true
          },
          description: {
               type: DataTypes.STRING, //
               allowNull: true
          }
     }, {
          tableName: 'Tasks'
     });


}




