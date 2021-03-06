import React, { useState, useEffect } from 'react'
import {Category} from '../Category/index'
import {List, Item} from './styles'

function useCategoriesData()  {
	const[categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)
	
	useEffect(function () {
		setLoading(true)
		window.fetch('https://petgram-server-kimislearning.now.sh/categories')
		.then(res => res.json())
		.then(resp => {
			setCategories(resp)
			setLoading(false)
		})
	}, [])

	return { categories, loading }
}

export const ListOfCategories = () => {
	const { categories, loading } = useCategoriesData()
	const[showFixed, setShowFixed] = useState(false)

	useEffect(function () {
		const onScroll = () => {
			const isShowFixed = window.scrollY > 200
			setShowFixed(isShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		return () => document.removeEventListener('scroll', onScroll)
	}, [showFixed])

  const renderList = (fixed) => (
		<List fixed={fixed}>
			{
				loading 
				? <Item key={'loading'}><Category /></Item> 
				: categories.map(category => <Item key={category.id}>
					  <Category {...category} path={`/pet/${category.id}`} />
					</Item>)
			}
		</List>
	)
	
	return (
		<>
		  {renderList()}
		  {showFixed && renderList(true)}
		</>
	)
}