export default function log(context) {
  // console.log(context)
  console.log(`Pasa por la página ${context.route.name}: ${context.route.path}`)
}