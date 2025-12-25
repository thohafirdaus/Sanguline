/**
 * @file plugins/themes/default/js/main.js
 *
 * Copyright (c) 2014-2021 Simon Fraser University
 * Copyright (c) 2000-2021 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @brief Handle JavaScript functionality unique to this theme.
 */
(function ($) {

	// Initialize dropdown navigation menus on large screens
	// See bootstrap dropdowns: https://getbootstrap.com/docs/4.0/components/dropdowns/
	if (typeof $.fn.dropdown !== 'undefined') {
		var $nav = $('#navigationPrimary, #navigationUser'),
			$submenus = $('ul', $nav);
		function toggleDropdowns() {
			if (window.innerWidth > 992) {
				$submenus.each(function (i) {
					var id = 'pkpDropdown' + i;
					$(this)
						.addClass('dropdown-menu')
						.attr('aria-labelledby', id);
					$(this).siblings('a')
						.attr('data-toggle', 'dropdown')
						.attr('aria-haspopup', true)
						.attr('aria-expanded', false)
						.attr('id', id)
						.attr('href', '#');
				});
				$('[data-toggle="dropdown"]').dropdown();

			} else {
				$('[data-toggle="dropdown"]').dropdown('dispose');
				$submenus.each(function (i) {
					$(this)
						.removeClass('dropdown-menu')
						.removeAttr('aria-labelledby');
					$(this).siblings('a')
						.removeAttr('data-toggle')
						.removeAttr('aria-haspopup')
						.removeAttr('aria-expanded',)
						.removeAttr('id')
						.attr('href', '#');
				});
			}
		}
		window.onresize = toggleDropdowns;
		$().ready(function () {
			toggleDropdowns();
		});
	}

	// Toggle nav menu on small screens
	$('.pkp_site_nav_toggle').click(function (e) {
		$('.pkp_site_nav_menu').toggleClass('pkp_site_nav_menu--isOpen');
		$('.pkp_site_nav_toggle').toggleClass('pkp_site_nav_toggle--transform');
	});

	// Modify the Chart.js display options used by UsageStats plugin
	document.addEventListener('usageStatsChartOptions.pkp', function (e) {
		e.chartOptions.elements.line.backgroundColor = 'rgba(0, 122, 178, 0.6)';
		e.chartOptions.elements.rectangle.backgroundColor = 'rgba(0, 122, 178, 0.6)';
	});

	// Toggle display of consent checkboxes in site-wide registration
	var $contextOptinGroup = $('#contextOptinGroup');
	if ($contextOptinGroup.length) {
		var $roles = $contextOptinGroup.find('.roles :checkbox');
		$roles.change(function () {
			var $thisRoles = $(this).closest('.roles');
			if ($thisRoles.find(':checked').length) {
				$thisRoles.siblings('.context_privacy').addClass('context_privacy_visible');
			} else {
				$thisRoles.siblings('.context_privacy').removeClass('context_privacy_visible');
			}
		});
	}

	// Show or hide the reviewer interests field on the registration form
	// when a user has opted to register as a reviewer.
	function reviewerInterestsToggle() {
		var is_checked = false;
		$('#reviewerOptinGroup').find('input').each(function () {
			if ($(this).is(':checked')) {
				is_checked = true;
				return false;
			}
		});
		if (is_checked) {
			$('#reviewerInterests').addClass('is_visible');
		} else {
			$('#reviewerInterests').removeClass('is_visible');
		}
	}

	reviewerInterestsToggle();
	$('#reviewerOptinGroup input').on('click', reviewerInterestsToggle);

	// Sangukara Theme: Abstract toggle for showing/hiding abstract content
	$(document).on('click', '.abstract_toggle', function (e) {
		e.preventDefault();
		var $button = $(this);
		var targetId = $button.data('toggle-target');
		var $target = $('#' + targetId);
		var isExpanded = $button.attr('aria-expanded') === 'true';

		if (isExpanded) {
			// Collapse
			$button.attr('aria-expanded', 'false');
			$target.attr('hidden', true);
		} else {
			// Expand
			$button.attr('aria-expanded', 'true');
			$target.removeAttr('hidden');
		}
	});


	// Sangukara Theme: Fetch article statistics for TOC display
	function loadArticleStats() {
		var $statContainers = $('.obj_article_summary .article_stats');
		if ($statContainers.length === 0) return;

		$statContainers.each(function () {
			var $container = $(this);
			var $viewsEl = $container.find('[data-stat-type="views"]');
			var $downloadsEl = $container.find('[data-stat-type="downloads"]');
			var submissionId = $viewsEl.data('submission-id');

			if (!submissionId) return;

			// Get total downloads stats from OJS API
			// The API endpoint for getting publication stats
			var apiUrl = $('body').data('base-url') || '';
			if (!apiUrl) {
				// Try to get base URL from existing page elements
				var $meta = $('meta[name="pkp-base-url"]');
				if ($meta.length) {
					apiUrl = $meta.attr('content');
				} else {
					// Fallback: get from current URL
					apiUrl = window.location.origin + window.location.pathname.split('/index.php')[0] + '/index.php';
					var journalPath = window.location.pathname.split('/index.php/')[1];
					if (journalPath) {
						journalPath = journalPath.split('/')[0];
						apiUrl = apiUrl + '/' + journalPath;
					}
				}
			}

			// Try to fetch stats using the stats API
			var statsApiUrl = apiUrl + '/api/v1/stats/publications/' + submissionId;

			$.ajax({
				url: statsApiUrl,
				method: 'GET',
				dataType: 'json',
				timeout: 5000,
				success: function (data) {
					if (data.abstractViews !== undefined) {
						$viewsEl.text(formatNumber(data.abstractViews) || '0');
					}
					if (data.galleyViews !== undefined) {
						$downloadsEl.text(formatNumber(data.galleyViews) || '0');
					}
				},
				error: function () {
					// If API fails, show N/A or hide stats
					$viewsEl.text('N/A');
					$downloadsEl.text('N/A');
				}
			});
		});
	}

	// Format large numbers with K/M suffix
	function formatNumber(num) {
		if (num === null || num === undefined) return '0';
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1) + 'M';
		} else if (num >= 1000) {
			return (num / 1000).toFixed(1) + 'K';
		}
		return num.toString();
	}

	// Load stats when document is ready
	$(document).ready(function () {
		loadArticleStats();
	});

})(jQuery);

