import TagEntities from '@/shared/ui/tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

const TagsWidget = () => {
  return (
    <Card className='min-w-[21rem] max-w-[50%] lg:block hidden'>
        <CardHeader>
            <CardTitle>Тэги</CardTitle>
        </CardHeader>
        <CardContent>
            <TagEntities isFull={true} variant='ghost' to='/sign-in'>One</TagEntities>
            <TagEntities isFull={true} variant='ghost' to='/sign-in'>One</TagEntities>
        </CardContent>
    </Card>
  )
}

export default TagsWidget