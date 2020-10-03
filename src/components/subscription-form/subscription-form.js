import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

export const SubscriptionForm = () => {
  return (
    <>
      <Typography variant="h6" component="h2">
        Unirme al Newsletter
      </Typography>
      <form
        id="new_subscriber"
        noValidate="novalidate"
        action="https://developero.ipzmarketing.com/f/adJdhFI4A9w"
        acceptCharset="UTF-8"
        method="post"
        target="_blank"
      >
        <Grid container spacing={2}>
          <input name="utf8" type="hidden" value="&#x2713;" />

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="subscriber[email]"
              id="subscriber_email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              type="text"
              name="subscriber[name]"
              id="subscriber_name"
            />
          </Grid>

          <input
            type="text"
            name="anotheremail"
            id="anotheremail"
            style={{ position: "absolute", left: "-5000px" }}
            tabIndex="-1"
            autoComplete="off"
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
