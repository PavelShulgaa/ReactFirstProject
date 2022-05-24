import React, { useState } from 'react'
import styles from './Articles.module.scss'

const Articles = () => {
	const [post, setPost] = useState([])
	const [loading, setLoading] = useState(true)

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
				)
				const data = await response.json()

				setPost(data)
			} catch (error) {
				console.log(error)
			}

			setLoading(false)
		}

		fetchData()
	}, [])

	return (
		<div>
			<h1>Articles</h1>

			{loading && 'Загрузка...'}
			<div className={styles.wrapper}>
				{post.map(post => (
					<div key={post.id} className={styles.card}>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
						<a href='/'>Read now</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default Articles
