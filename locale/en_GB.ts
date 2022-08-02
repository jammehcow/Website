export default {
	locale: "English (United Kingdom)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Learn More",
		more: "More",
		retry: "Retry",
		back: "Back",
		download: "Download | Downloads",
		features: "Features",
		comments: "Comments",
		search: "Search",
		update: "Update",
		report: "Report",
		delete: "Delete",
		cancel: "Cancel",
		activity: "Activity",
		loading: "Loading",
		save_changes: "Save Changes",
		reset: "Reset",
		object: {
			user: "User",
			emote_set: "Emote Set",
			emote: "Emote",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "The Emote Platform for All",
		app_description: "Manage hundreds of emotes for your Twitch or YouTube channels with ease",
		why_app: "Why @:common.appName{'?'}",
		download_browser: "Browser Extension",
		download_mobile: "Mobile Apps",
		download_misc: "Other Apps",
		features: {
			emote_sets: {
				name: "Emote Sets",
				detail: "Group emote in customizable sets that can be shared with other users or quickly swapped onto your channel.",
			},
			many_emote_slots: {
				name: "Hundreds of emote slots",
				detail: "Start with {0} slots, with a possible maximum of {1} and no paywall.",
			},
			channel_emote_names: {
				name: "Per-channel emote names",
				detail: "Don't like the name given to an emote by its author? That's fine, you can change it for your channel only.",
			},
			real_time: {
				name: "Real-Time",
				detail: "Changing emotes in your channel happens instantly for all viewers. No F5 is required.",
			},
			emote_versions: {
				name: "Emote Versioning",
				detail: "Swap between themed variants or update an emote to an improved version.",
			},
			next_gen: {
				name: "Next-gen image formats like WEBP and AVIF",
				detail: "We use newer, more optimised image formats to reduce bandwidth usage.",
			},
			source_available: {
				name: "Source-Available",
				detail: "Our entire codebase is available on GitHub with a source-available licence. Anyone can view and contribute.",
			},
		},
		socials: {
			discord: "Join @:common.appName on Discord",
			discord_online_count: "{0} online now",
			twitter: "Follow us on Twitter",
			github: "Contribute",
		},
	},
	// Nav Bar
	nav: {
		home: "Home",
		about: "About",
		emotes: "Emotes",
		store: "Subscribe",
		admin: "Admin",
		sign_in: "Sign In",
		wip_notice: {
			heading: "Welcome to the new @:common.appName website",
			text1: "This is an early preview of the next way to experience @:common.appName{'.'}",
			text2: "Explore what's new and give us feedback! Note it will be undergoing rapid changes and may break frequently.",
		},
	},
	activity: {
		emote_created: "Created {T}",
		emote_renamed: "Renamed {T} from {O} to {N}",
		emote_listing_approved: "Approved {T} for public listing",
		emote_listing_revoked: "Remove {T} from public listing",
		emote_merged: "Merged {T} into {0}",
		emote_ownership_transferred: "Transferred ownership of {T} to {U}",
		emote_restored: "Restored {T}",
		emote_updated: "Changed properties for {T}",
		emote_deleted: "Deleted {T}",
		emote_processed: "Executed a new processing job for {T}",
		emote_version_created: "Created version '{VER}' for {T}",
		emote_version_renamed: "Renamed version '{VER}' for {T} from {1} to {2}",
		emote_version_approved: "Approved version '{VER}' for {T} for public listing",
		emote_version_restored: "Restored version '{VER}' for {T}",
		emote_version_deleted: "Deleted version'{VER}' for {T}",
		user_created: "Created {T}",
		user_deleted: "Deleted {T}",
		user_editor_added: "Added {U} as an editor",
		user_editor_added_other: "Added {U1} as an editor of {U2}",
		user_editor_removed: "Revoked {U}'s editor privileges",
		user_editor_removed_other: "Revoked {U1}'s editor privileges to {U2}",
		user_banned: "Banned {T}",
		user_unbanned: "Unbanned {T}",
		user_updated: "Changed properties for {T}",
		user_sign_in: "{T} Has signed in",
		user_sign_out: "{T} Has logged out",
		user_forbidden: "{T} Was denied access to {0}",
		emote_set_created: "Created {T}",
		emote_set_emote_added: "Added the emote {AE} to {T}",
		emote_set_emote_removed: "Removed the emote {AE} from {T}",
		emote_set_emote_renamed: "Renamed the emote from {AE} from {O} to {N} in {T}",
		emote_set_updated: "Changed properties for {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Add Emote",
		author: "Added by",
		created_at: "Created",
		versions: "Versions",
		preview_loading: "Loading previews... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Failed to load previews",
		processing: "Processing Emote (this may take some time.)",
		use: "Use Emote",
		switch_version: "Switch to this version",
		in_n_sets: "in {0} set | in {0} sets",
		disable: "Disable Emote",
		update: "Update",
		report: "Report Emote",
		Privacy: "Privacy",
		comments: "Comments",
		channels: "Channels",
		common_names: "Other names for this emote",
		usage_stats: "Emote statistics",
		no_longer_available: "This emote is no longer available",
		delete_prompt: {
			heading: "Delete {0}",
			heading_versions: "Delete version '{0}' of {1}",
			notice: "Are you sure you want to delete the emote {0}{'?'}",
			notice_versions: "Are you sure you want to delete the version of '{0} from {1}{'?'}",
			reason: "Reason for deletion",
		},
		unlisted: {
			heading: "Heads up!",
			warning: "This emote is not publicly listed.\n",
			warning_flagged: "This emote has been unlisted for the following reasons: {FLAG_LIST}\n",
			notice: "It can be added to your channel, but we cannot verify if it is safe to show on a livestream.",
			notice_flagged: "It can be added to your channel, however we believe it is unsafe to show on a livestream.",
			show_button: "Show Emote",
			flag_sexual_content: "Sexual or sexually suggestive content",
			flag_epilepsy: "Rapid flashing / seizure-inducing",
			flag_edgy: "Edgy or distasteful",
			flag_twitch_banned: "Disallowed on Twitch",
		},
		list: {
			searching: "Searching",
			emote_count: "{0} Emotes",
			no_emotes_listed: "No emotes found",
			fetching_slowly: "Sorry, it seems this is taking a while",
		},
		upload: {
			emote_name: "Emote Name",
			version_name: "Version Name",
			version_description: "Version Description",
			submit_emote: "Submit Emote",
			create_emote_version: "Create Emote Version",
			image_upload: "Image Upload",
			accepted_formats: "Accepted Formats",
			filetype: "File",
			animation: "Animation",
			transparency: "Transparency",
			emote_details: "Emote Details",
			version_details: "Version Details",
			attribution: "Attribution",
			original_creator: "Original Creator",
			as_child: "You are creating a {IS_DIVERGED} version of {0}. ",
			content_moderation: "Content Moderation",
			half_transparency_tooltip:
				"Pixels can only be fully transparent or fully opaque (no variable transparency)",
		},
	},
	emote_set: {
		create: "New @:common.object.emote_set",
		select: "Select @:common.object.emote_set",
		explain: {
			section: "What are @:common.object.emote_sets{'s'}?",
			hint: "Emote Sets are a collection of emotes which can be bound to your channels or shared with other users.",
		},
		no_space: "Slots Full",
		none_selected: "No Set Selected",
		editing: "Editing {0}",
		owner: "{USER}'s Emote Set",
		owned: "Owned Emote Set",
		label_renamed: "Renamed",
		label_conflict: "Conflict",
		label_default: "Default",
		modal: {
			selected_channel_count: "no channel selected | {0} channel selected | {0} channels selected",
			create_button: "Create @:common.object.emote_set",
			rename_in_set: "Rename in {0}",
			context_rename: "Customise Emote Name",
			context_set_default: "Assign As Default",
			context_unset_default: "Unassign As Default",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Emote Sets",
		channel_emotes: "Channel Emotes",
		joined_at: "Joined {0}",
		editors: "Editors",
		roles: "Roles",
		connections: "Channels | Channels & Accounts",
		new_connections: "Link accounts...",
		no_channel_emotes: "{0} Does not have any emote on their {1} channel",
		no_channels: "{0} Doesn't have any channels connected!",
		card: {
			view_full_profile: "View Full Profile",
		},
		settings: {
			button: "Edit Profile",
			section_profile: "Profile\n",
			username: "Username",
			display_name: "Display Name",
			profile_picture: "Profile Picture",
		},
	},
	store: {},
	// Text that is relating to the reporting system
	reporting: {
		report: "Report",
		emote_reason: {
			i_made_this: "I made this emote, but it was uploaded by someone else",
			duplicate: "This emote is a duplicate",
			pornographic: "This emote contains pornographic or overly sexualized imagery",
			violence_gore: "This emote displays extreme violence or gore",
			i_appear_there: "This emote depicts me and I don't like it",
			offensive: "I find this emote offensive",
			other: "Other",
		},
		uncategorized_prompt: "What's the matter?",
		details: "Details (additional info and/or evidence for your report)",
		success: "Report submitted successfully",
		notify: "You will be notified via the inbox once your report is handled or further information is requested.",
		complete_step_one: "Continue",
		abuse_notice: "Abuse of the report feature may lead to your access being revoked.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Inbox",
		tabs: {
			all: "All Messages",
			unread: "Unread",
			important: "Important",
		},
		unread_tag: "Unread",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Emote Approved for listing",
				content: `# Your emote "{EMOTE_NAME}" was approved for listing \n
It will now be available on the Emote Directory and begin appearing on @:common.appHost{'-'}`,
			},
			emote_not_listed: {
				subject: "Emote Not Approved for Listing",
				content: `
# Your emote "{EMOTE_NAME}" was rejected
it will not be available via the public Emote Directory or visible on @:common.appHost,
but will remain available for users with the link.
`,
			},
			emote_ownership_claim_request: {
				subject: "Invitation to claim ownership of an emote",
				content: `
##{OWNER_DISPLAY_NAME} wants you to become the owner of '{EMOTE_NAME}'

[View Emote]({EMOTE_URL})

**[Accept Request]({EMOTE_CLAIM_URL})** | [Decline Request]({EMOTE_DECLINE_URL})
				`,
			},
			client_banned: {
				subject: "You've been banned",
				reason: {
					pornographic_content: "",
				},
				content: `
# Account Banned
Your access to @:common.appName is now limited.<br/><br/>
### Reason for this action
{BAN_REASON} <br/><br/>
### Restrictions Applied<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>This decision expires **{BAN_EXPIRE_AT}**.
_If you believe this is a mistake, please email @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* You may no longer interact with the app",
					no_auth: "* You may no longer sign in",
					no_ownership: "* Any content you created will no longer be available",
					memory_hole: "* You won't be visible to other users",
					ip_blocked: "* Your IP is blocked from accessing all @:common.appName services",
				},
			},
			report_closed: {
				subject: "Report closed",
				content: `
Thank you for notifying us, your {'#'}{CASE_ID} has been handled.`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "We couldn't find it",
		doctor_wtf: "The hell's this?",
		pot_friend: "I'm a pot, friend",
	},
};
