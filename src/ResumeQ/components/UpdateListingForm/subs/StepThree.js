import React from 'react';

import Icon from '../../../../global/icons/Icon';
import { ICONS } from '../../../../global/icons/iconConstants';
import { blankavatar2 } from '../../../../global/icons/blankavatar';

const StepThree = ({ user, image, formState }) => {
	return (
		<>
			<p className='RQadd-listing-form-sub-title'>Preview</p>
			<p className='RQadd-listing-form-description'>
				This is what seekers will see when your profile matches their
				search parameters. Review the information, and click "Publish"
				for your profile to go live!
							</p>
			<div className='RQadd-listing-form-preview-container'>
				<div className='RQadd-listing-form-preview-close'>
					<Icon
						icon={ICONS.CLOSE}
						width={24}
						height={24}
						color='rgba(0, 0, 0, 0.54)'
					/>
				</div>
				<div className='RQadd-listing-form-preview-top'>
					<div className='RQadd-listing-form-preview-top-text'>
						<p className='RQadd-listing-form-preview-name'>
							{user && `${user.first_name} ${user.last_name}`}
						</p>
						<p className='RQadd-listing-form-preview-amount'>
							${formState.price} per review
										</p>
					</div>
					{image ? <img
						className='RQadd-listing-form-preview-listing-photo'
						src={image}
						alt='listing Profile Pic'
					/> : <div className='RQprofile-img-listing-form'>
							{blankavatar2()}
						</div>}

				</div>
				<div className='RQlistingformcard-info'>
					<p>
						<span className='RQlistingcard-icon'>
							<Icon
								icon={ICONS.POSITIONGRAY}
								width={24}
								height={24}
								color='#5F6368'
							/>
						</span>
						{formState.company}
						{formState.company !== '' && formState.position !== ''
							? ' - '
							: null}
						{formState.position}
					</p>
					<p>
						<span className='RQlistingcard-icon'>
							<Icon
								icon={ICONS.LOCATIONGRAY}
								width={24}
								height={24}
								color='#5F6368'
							/>
						</span>
						{user && `${user.city}, ${user.state}`}
					</p>
				</div>
				<div className='RQadd-listing-form-preview-description'>
					<p>{formState.description}</p>
				</div>
				<div className='RQlistingformcard-footer'>
					<div className='RQlistingcard-links'>
						{user && user.linkedin_url && (
							<div className='icon1'>
								<Icon icon={ICONS.LINKEDIN} width={24} height={24} color='#5F6368' />
							</div>
						)}
						{user && user.twitter_url && (
							<div>
								<Icon icon={ICONS.TWITTER} width={24} height={24} color='#5F6368' />
							</div>
						)}
					</div>
				</div>
				<button className='RQinterview-button' disabled>
					Request
								</button>
			</div>
		</>
	);
}

export default StepThree;
