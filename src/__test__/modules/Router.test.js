import React from 'react'
import { shallow } from 'enzyme'

import Router from '../../modules/Router'

describe('Router Component', () => {
  const router = shallow(<Router />)
  it('should redenders properly', () => {
    expect(router).toMatchSnapshot()
  })
})
