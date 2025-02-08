/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("projects", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users", 
        key: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.createTable("user_projects", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      projectId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "projects",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user_projects");
    await queryInterface.removeColumn("projects", "userId");
  },
};
