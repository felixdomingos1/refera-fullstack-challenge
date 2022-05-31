import { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { ModalContext } from 'src/contexts/ModalContext'
import * as S from './styles'
import { fetchCategories } from './api/useFetchCategories'
import { fetchOrder } from './api/useFetchOrder'

export type FormData = {
  name: string
  phone: string
  agency: string
  description: string
  category: string
  company: string
  deadline: Date
}

export function NewOrderModal() {
  const { modalOpen, handleCloseModal } = useContext(ModalContext)
  const [categories, setCategories] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit(data => {
    fetchOrder({ ...data })
      .then(response => {
        if (response) alert('Order created successfully')
      })
      .catch(error => {
        console.log(error)
      })
  })

  useEffect(() => {
    fetchCategories()
      .then(categories => setCategories(categories))
      .catch(error => console.log(error))
  }, [])

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
      >
        x
      </button>
      <S.Container onSubmit={onSubmit}>
        <h2>New Order</h2>

        <S.Row>
          <S.Row>
            <div>
              <label htmlFor="">Contact Name</label>
              <input
                {...register('name', { required: true })}
                placeholder="Contact Name"
              />
              <small>
                {errors.name?.type === 'required' && 'This field is required'}
              </small>
            </div>

            <div>
              <label htmlFor="">Contact Phone</label>
              <input
                {...register('phone', { required: true })}
                placeholder="Contact Phone"
              />

              <small>
                {errors.phone?.type === 'required' && 'This field is required'}
              </small>
            </div>
          </S.Row>

          <div>
            <label htmlFor="">Real Estate Agency</label>
            <input
              {...register('agency', { required: true })}
              placeholder="Real Estate Agency"
            />

            <small>
              {errors.agency?.type === 'required' && 'This field is required'}
            </small>
          </div>
        </S.Row>

        <S.Row>
          <div>
            <label htmlFor="">Order Description</label>
            <textarea {...register('description', { required: true })} />
            <small>
              {errors.category?.type === 'required' && 'This field is required'}
            </small>
          </div>

          <div>
            <label htmlFor="">Company</label>
            <input
              {...register('company', { required: true })}
              placeholder="Company"
            />

            <small>
              {errors.company?.type === 'required' && 'This field is required'}
            </small>
          </div>
        </S.Row>

        <S.Row>
          <div>
            <label htmlFor="">Select the order category</label>
            <select {...register('category', { required: true })}>
              {categories?.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <small>
              {errors.category?.type === 'required' && 'This field is required'}
            </small>
          </div>

          <div>
            <label htmlFor="">Deadline</label>
            <input
              type="date"
              {...register('deadline', { required: true })}
              placeholder="Deadline"
            />

            <small>
              {errors.deadline?.type === 'required' && 'This field is required'}
            </small>
          </div>
        </S.Row>

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}
