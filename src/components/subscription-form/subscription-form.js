import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import { useSubscriptionUrls } from "../../hooks/useSubscriptionUrls"

const useStyle = makeStyles(() => ({
  title: {
    color: "#000",
  },
  root: {
    background: "white",
  },
  input: {
    color: "black",
  },
}))

export const SubscriptionForm = ({
  actionUrl,
  label = "Únete al Newsletter",
}) => {
  const classes = useStyle()

  const { feeds } = useSubscriptionUrls()

  const action = actionUrl || feeds

  return (
    <>
      <Box my={2}>
        <Typography
          className={classes.title}
          variant="h6"
          component="h2"
          align="center"
        >
          {label}
          {"  "}
          <span role="img" aria-label="mail">
            📬
          </span>
          <span role="img" aria-label="nerd-face">
            🤓
          </span>
        </Typography>
      </Box>

      <form
        id="new_subscriber"
        noValidate="novalidate"
        action={action}
        acceptCharset="UTF-8"
        method="post"
        target="_blank"
      >
        <Grid container spacing={3}>
          <input
            name="utf8"
            type="hidden"
            value="&#x2713;"
            aria-hidden="true"
          />

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="subscriber[email]"
              id="subscriber_email"
              variant="outlined"
              color="primary"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              type="text"
              name="subscriber[name]"
              id="subscriber_name"
              variant="outlined"
              color="primary"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <input
            type="text"
            name="anotheremail"
            id="anotheremail"
            style={{ position: "absolute", left: "-5000px" }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <Grid item xs={12}>
            <Button
              type="submit"
              name="commit"
              value="Enviar"
              data-disable-with="Procesando"
              variant="contained"
              color="primary"
              fullWidth
            >
              Suscribirme
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
