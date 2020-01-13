import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => (
	<Layout
		title='Tu app de fotos de mascotas' 
		subtitle='Con petgram puedes encontrar fotos de animales domésticos muy bonitos.'
	>
		<ListOfCategories />
		<ListOfPhotoCards categoryId={categoryId} />
	</Layout>
)