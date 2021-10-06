import React, {Component} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
class TaskItem extends Component {
    render() {
      const { task, status } = this.props;
      const { id, title } = task;
      return (
        <Card key={id}>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item md={8}>
                <Typography component="h2">{title}</Typography>
              </Grid>
              <Grid item md={4}>
                {status.label}
              </Grid>
            </Grid>
            <p>{task.description}</p>
          </CardContent>
          <CardActions>
            <Fab
              color="primary"
              aria-label="Edit"
              size="small"
            >
              <Icon fontSize="small">edit_icon</Icon>
            </Fab>
            <Fab
              color="primary"
              aria-label="Delete"
              size="small"
            >
              <Icon fontSize="small">delete_icon</Icon>
            </Fab>
          </CardActions>
        </Card>
      );
    }
  }
  export default TaskItem;