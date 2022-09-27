import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de persona
export const Persona = db.define(
  "Persona",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { 
        field: "nombre", type: DataTypes.VARCHAR(50),
        allowNull: false
    },

    apellido: { 
        field: "apellido", type: DataTypes.VARCHAR(50),
        allowNull: false
    },

    direccion: { 
        field: "direccion", type: DataTypes.VARCHAR(100)
        
    },

    email: { 
        field: "email", type: DataTypes.VARCHAR(80)
       
    },
    edad: { 
        field: "edad", type: DataTypes.INTEGER
       
    },
    altura: { 
        field: "altura", type: DataTypes.DECIMAL(10,3)
       
    },
    peso: { 
        field: "peso", type: DataTypes.DECIMAL(10,3)
       
    },

  },
  { tableName: "personas", timestamps: false } /// timestamps en false por que si no espera dos parametros
);
