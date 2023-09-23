import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmporiums } from '../../store/emporiumsSlice'
import AmazingForm from './AmazingForm'
import CardEmporiums from './CardEmporiums'
import { Button, Col, Row, Container } from 'react-bootstrap';



export default function EmporiumsContainer() {

  const dispatch = useDispatch()
  const { emporiums, isLoading } = useSelector((state) => { return state.emporiums })
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => { dispatch(getEmporiums()) }, [dispatch])

  return (

    <Container>

      <h1>EmporiumsContainer</h1>
      <Button variant="primary" onClick={() => setShowAddForm(true)}>Add Emporium</Button>
      <h2>All Emporiums</h2>
      {showAddForm ? <AmazingForm /> : (isLoading ? <h2>loading....</h2> : <Row>{(emporiums.map(item => <Col key={item.id} sm={12} md={6} lg={4}><CardEmporiums data={item} dispatch={dispatch}/></Col>))}</Row>)}
    </Container>


  )
}
