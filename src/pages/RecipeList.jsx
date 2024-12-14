import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//const API_URL = VITE_API_URL;

// EJERCICIO 2
// Crea dos estados utilizando el hook useState. Un estado que nos permita guardar las recetas al consultar la API y otro que permita manejar
// el momento es que la data esta cargandose.

const RecipeList = () => {
  const { data, loading, error } = useFetch(import.meta.env.VITE_API_URL);

  // if(error){
  //   return <p>Error obteniendo los datos...</p>
  // }

  if (loading) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {data?.meals.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
          <Card>
            <CardActionArea
              component={Link}
              to={`/recetas/${recipe.strMeal}`}
              state={{ recipe }}
            >
              <CardMedia
                component="img"
                height="140"
                image={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {recipe.strMeal}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
