import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { SearchBar } from './SearchBar'

vi.mock('../Icon/Icon', () => ({
  Icon: ({ type }: any) => <div data-testid={`icon-${type}`} />,
}))

describe('<SearchBar />', () => {
  let container: any
  let onSearch: any
  let input: any
  let searchButton: any

  const fireEventsAndAssert = (eventFn: any, sourceElem: any, eventArgs: any) => {
    fireEvent.change(input, { target: { value: 'iPhone' } })
    eventFn(sourceElem, eventArgs)
    expect(onSearch).toHaveBeenCalledWith('iPhone')
  }

  beforeEach(() => {
    onSearch = vi.fn()
    const renderResult = render(<SearchBar placeholder="Nunca dejes de buscar" onSearch={onSearch} />)
    const { getByPlaceholderText } = renderResult
    const { getByTestId } = renderResult
    container = renderResult.container
    input = getByPlaceholderText('Nunca dejes de buscar')
    searchButton = getByTestId('icon-search')
  })

  it('renders input and icon', () => {
    expect(input).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  })

  it('allows input of text', () => {
    fireEvent.change(input, { target: { value: 'iPhone' } })
    expect(input.value).toBe('iPhone')
  })

  it('calls onSearch function on button click', () => {
    fireEventsAndAssert(fireEvent.click, searchButton, null)

    expect(onSearch).toHaveBeenCalledWith('iPhone')
  })

  it('calls onSearch function on enter key press', () => {
    fireEventsAndAssert(fireEvent.keyDown, input, { key: 'Enter', code: 'Enter' })

    expect(onSearch).toHaveBeenCalledWith('iPhone')
  })

  it('applies the correct theme', () => {
    expect(container.firstChild).toHaveClass('search-bar--dark')
    expect(input).toHaveClass('search-bar--input--dark')
    expect(searchButton).toBeDefined()
  })

  it('applies the correct theme when theme prop is provided', () => {
    const { container: lightContainer, getByPlaceholderText } = render(
      <SearchBar placeholder="Nunca dejes de buscar light" onSearch={onSearch} theme="light" />
    )
    const lightInput = getByPlaceholderText('Nunca dejes de buscar light')

    expect(lightContainer.firstChild).toHaveClass('search-bar--light')
    expect(lightInput).toHaveClass('search-bar--input--light')
  })

  it('applies the initial value when value prop is provided', () => {
    const { getByDisplayValue } = render(
      <SearchBar placeholder="Nunca dejes de buscar" onSearch={onSearch} value="iPhone" />
    )
    const inputWithValue = getByDisplayValue('iPhone') as HTMLInputElement

    expect(inputWithValue.value).toBe('iPhone')
  })
})
