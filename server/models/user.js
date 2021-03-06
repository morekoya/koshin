module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    personalAccessToken: {
      type: DataTypes.STRING,
      field: 'personal_access_token'
    },
    senderEmail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      field: 'sender_email'
    },
    organisations: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      field: 'organisations'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  },
    {
      timestamps: true,
      tableName: 'users',
      classMethods: {
        associate: (models) => {
          User.hasMany(models.Repo, {
            onDelete: 'CASCADE',
            foreignKey: {
              name: 'userId',
              field: 'user_id'
            }
          });
          User.hasMany(models.Email, {
            onDelete: 'CASCADE',
            foreignKey: {
              name: 'userId',
              field: 'user_id',
              unique: true
            }
          });
          User.hasMany(models.Report, {
            onDelete: 'CASCADE',
            foreignKey: {
              name: 'userId',
              field: 'user_id'
            }
          });
        }
      }
    });
  return User;
};
