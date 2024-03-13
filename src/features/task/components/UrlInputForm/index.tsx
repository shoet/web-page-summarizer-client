import { EnterIcon2 } from '@/components/Element/Icon'
import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: #EEE;
  padding: 5px 20px 5px 10px;
`

const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 24px;
  line-height: 40px;
  caret-color: gray;
  width: 100%;
  &::placeholder {
    font-size: 16px;
    position: absolute;
    top: 30%;
  }
`

type UrlInputFormProps = {
  onSubmit?: (text: string) => Promise<void>
}

export const UrlInputForm = (props: UrlInputFormProps) => {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleInputOnKeydown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == 'Enter') {
      const input = event.target as HTMLInputElement
      const text = input.value
      console.log(text)
      onSubmit && onSubmit(text)
      setValue('')
    }
  }

  return (
    <FormContainer>
      <Input
        value={value}
        onChange={handleInputOnChange}
        onKeyDown={handleInputOnKeydown}
        placeholder="Enter URL..."
      />
      <EnterIcon2 size={25} color="gray" />
    </FormContainer>
  )
}
