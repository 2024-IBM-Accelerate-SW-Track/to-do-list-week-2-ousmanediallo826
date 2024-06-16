import React from "react";
import "../component/todos.css";
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10 }}>
            <ListItemButton component="a" href="#simple-list">
            <Checkbox
            edge="end"
            onClick={() => deleteTodo(todo.id)}
            color="primary"
            style={{ paddingLeft: 0, marginRight: 20 }}
            data-testid={`delete-todo-${todo.id}`}
          />
          
              <ListItemText
                primary={todo.content}
                secondary={todo.date}
                style={{ marginTop: 10 }}
              />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
