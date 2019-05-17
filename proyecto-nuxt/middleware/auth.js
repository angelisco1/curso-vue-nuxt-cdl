export default function (context) {
  console.log(context);
  const logueado = context.app.$token.getToken();
  if (!logueado) {
    context.redirect('/');
  }
}