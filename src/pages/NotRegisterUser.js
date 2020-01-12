import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => (
	<Context.Consumer>
    {
			({ activateAuth }) => {
				return (
					<>
					<RegisterMutation>
						{
							(register) => {
								const onSubmit = ({ email, password }) => {
									const input = { email, password }
									const variables = { input }
									register({ variables }).then(activateAuth)
								}
							return <UserForm title='Registrarse' onSubmit={onSubmit} />
							}
						}
					</RegisterMutation>
					<LoginMutation>
					{
							(login, { data, loading, error }) => {
								const onSubmit = ({ email, password }) => {
									const input = { email, password }
									const variables = { input }
									login({ variables }).then(activateAuth)
								}
								const errorMsg =  error 
								&& 'El usuario ya existe o hau algún problema.'

							return <UserForm 
							  disabled={loading} 
								error={errorMsg} 
								title='Iniciar sesión' 
							  onSubmit={onSubmit} 
							/>
							}
						}
					</LoginMutation>
				  </>
				)
			}
		}
	</Context.Consumer>
)