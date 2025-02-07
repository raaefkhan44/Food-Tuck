import { type SchemaTypeDefinition } from 'sanity'
import { food } from './food'
import { chef } from './chefs'
import { order } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food,chef,order],
}
