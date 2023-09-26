
import Vacancies, { VacanciesProps } from '../../../domain/vacancies/entity/vacancy'

describe('Vacancies', () => {
  it('should create an instance of Vacancies', () => {
    const props: VacanciesProps = {
      title: 'Full Stack Developer',
      description: 'Job description',
      requirements: 'Job requirements',
      type: 'Full-Time',
    }

    const vacancy = Vacancies.create(props)

    expect(vacancy).toBeInstanceOf(Vacancies)
    expect(vacancy.title).toEqual('Full Stack Developer')
    expect(vacancy.description).toEqual('Job description')
    expect(vacancy.requirements).toEqual('Job requirements')
    expect(vacancy.type).toEqual('Full-Time')
    expect(vacancy.is_active).toEqual(true)
  })

  it('should allow changing the title', () => {
    const props: VacanciesProps = {
      title: 'Full Stack Developer',
      description: 'Job description',
      requirements: 'Job requirements',
      type: 'Full-Time',
    }

    const vacancy = Vacancies.create(props)
    vacancy.changeTitle('New Title')

    expect(vacancy.title).toEqual('New Title')
  })

  it('should allow changing the description', () => {
    const props: VacanciesProps = {
      title: 'Full Stack Developer',
      description: 'Job description',
      requirements: 'Job requirements',
      type: 'Full-Time',
    }

    const vacancy = Vacancies.create(props)
    vacancy.changeDescription('New Description')

    expect(vacancy.description).toEqual('New Description')
  })

  it('should allow activating and deactivating a vacancy', () => {
    const props: VacanciesProps = {
      title: 'Full Stack Developer',
      description: 'Job description',
      requirements: 'Job requirements',
      type: 'Full-Time',
    }

    const vacancy = Vacancies.create(props)
    vacancy.deactivate()
    expect(vacancy.is_active).toEqual(false)

    vacancy.activate()
    expect(vacancy.is_active).toEqual(true)
  })
})
