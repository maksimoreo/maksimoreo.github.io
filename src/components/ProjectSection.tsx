import clsx from 'clsx'
import { ReactElement } from 'react'

interface Props {
  backgroundColor: string
  isTextLeft?: boolean

  demoElements?: ReactElement | ReactElement[] | undefined | null
  demoClasses?: string | string[] | undefined | null

  titleText: string | ReactElement | ReactElement[]
  titleTextColor?: string
  titleClasses?: string | string[]

  descriptionText: ReactElement | ReactElement[]
  shortDescriptionText: string | ReactElement | ReactElement[]
  descriptionTextColor?: string
  descriptionClasses?: string | string[]

  pins: ReactElement | ReactElement[]
}

export default function ProjectSection(props: Props) {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <div className="container flex flex-col gap-4 px-3 py-32 mx-auto lg:py-32 xl:py-48 lg:flex-row ">
        <div className={clsx('lg:flex-1', props.demoClasses, { 'lg:order-2': props.isTextLeft })}>
          {props.demoElements}
        </div>

        <div
          className={clsx('lg:flex-1', props.descriptionClasses, props.isTextLeft ? 'lg:mr-24' : 'lg:ml-24')}
          style={props.descriptionTextColor ? { color: props.descriptionTextColor } : undefined}
        >
          <h4
            className={clsx('text-3xl font-bold maxwebsite-font-title', props.titleClasses)}
            style={props.titleTextColor ? { color: props.titleTextColor } : undefined}
          >
            {props.titleText}
          </h4>
          <p>{props.shortDescriptionText}</p>

          <div className="flex flex-wrap gap-3 mt-4">{props.pins}</div>

          <div className="mt-4">{props.descriptionText}</div>
        </div>
      </div>
    </div>
  )
}
