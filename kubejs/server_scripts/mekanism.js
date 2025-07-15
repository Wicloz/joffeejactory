ServerEvents.recipes(event => {
    event.remove({ output: 'mekanismgenerators:wind_generator' })
    event.remove({ input: 'mekanismgenerators:wind_generator' })
})
