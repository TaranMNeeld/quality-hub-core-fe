import { gql } from 'apollo-boost'

export const GET_INDUSTRIES = gql`
	query {
		industries {
			name
		}
	}
`
export const RESUME_Q = gql`
    query {
        resumeQinfo
    }
`

export const GET_REVIEWER_LISTINGS = gql`
    query {
        reviewerListings{
            id
            price
            position
            industry
            description
            createdAt
            updatedAt
            company
            isPublished
            coach {
                last_name
                first_name
            }
        }
    }
`