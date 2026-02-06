# Syndesi.ai Website Deployment Guide for Plurasites.com

This guide provides instructions for deploying the new Syndesi.ai website to your Plurasites.com hosting.

## Overview

The new Syndesi.ai website is a modern, static website built with React, Vite, and Tailwind CSS. It features:

- **Home page** with "Connecting Insight to Impact" messaging
- **Our Ventures** page showcasing PartnerMind.ai and LocalAnswer.io
- **How We Build** page explaining the venture studio model
- **For Founders** page with co-founder recruitment
- **Advisory** page with services and contact form
- **About** page with company story and mission

## Files to Deploy

All production-ready files are located in the `/home/ubuntu/syndesi-website/dist/public/` directory. These files include:

- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript bundles
- Any other static assets (images, fonts, etc.)

## Deployment Steps

### Option 1: Full Directory Upload (Recommended)

1. **Download the complete website package** (provided separately)
2. **Contact Plurasites.com support** and request to upload new website files
3. **Provide them with the contents of the `dist/public/` folder**
4. **Request they replace all existing files** with the new ones
5. **Verify the deployment** by visiting syndesi.ai

### Option 2: FTP/SFTP Upload (If You Have Access)

If Plurasites provides FTP/SFTP access:

1. Connect to your Plurasites hosting via FTP/SFTP
2. Navigate to your website's root directory (usually `public_html/` or `www/`)
3. **Backup existing files** (create a backup folder)
4. Delete all existing website files
5. Upload all files from `dist/public/` to the root directory
6. Ensure `index.html` is in the root directory
7. Verify the deployment

### Option 3: File Manager Upload (If Available in Control Panel)

If Plurasites provides a file manager in their control panel:

1. Log into your Plurasites control panel
2. Navigate to the File Manager
3. Go to your website's root directory
4. **Backup existing files** first
5. Delete old files
6. Upload all files from `dist/public/`
7. Verify the deployment

## Important Notes

### Domain Configuration

- The website should work immediately at **syndesi.ai** once files are uploaded
- No special server configuration is required (it's a static site)
- Ensure your domain DNS is pointing to Plurasites servers (should already be configured)

### SSL Certificate

- Verify that your SSL certificate (HTTPS) is active
- Most hosting providers auto-configure SSL - check with Plurasites if needed

### Forms

The website includes two contact forms:

1. **For Founders application** (on /for-founders page)
2. **Advisory contact form** (on /advisory page)

**Important:** These forms currently show a success toast notification but **do not send emails**. You will need to:

- Work with Plurasites to set up form handling, OR
- Integrate a third-party form service like Formspree, Netlify Forms, or similar

### Logo Update

The website currently uses a placeholder logo. To update:

1. The logo is controlled by the `APP_LOGO` constant in the code
2. For now, you can replace the logo image file in the `assets/` folder
3. **Note:** You'll also need to update the favicon separately via the Manus Management Dashboard if you want it to match

## Testing After Deployment

After deployment, verify the following:

1. ✅ All pages load correctly:
   - Home (/)
   - Our Ventures (/ventures)
   - How We Build (/how-we-build)
   - For Founders (/for-founders)
   - Advisory (/advisory)
   - About (/about)

2. ✅ Navigation works correctly
3. ✅ All links to PartnerMind.ai and LocalAnswer.io work
4. ✅ Forms display correctly (even if not functional yet)
5. ✅ Mobile responsiveness works
6. ✅ HTTPS is active

## Troubleshooting

### Issue: Pages show 404 errors when accessed directly

**Solution:** This is a common issue with single-page applications. You need to configure your server to redirect all requests to `index.html`. Contact Plurasites support and request they add this configuration.

### Issue: Styles not loading

**Solution:** Ensure all files in the `assets/` folder are uploaded correctly. Check browser console for any 404 errors on CSS files.

### Issue: Forms not working

**Expected:** Forms are not yet connected to a backend. See the "Forms" section above for next steps.

## Support

If you encounter any issues during deployment:

1. Contact Plurasites.com support directly
2. Provide them with this deployment guide
3. Request assistance with static website hosting

## Next Steps After Deployment

Once the website is live, consider:

1. **Set up form handling** for the contact forms
2. **Add Google Analytics** or other tracking (if desired)
3. **Update the logo** to your final Syndesi branding
4. **Test all functionality** on mobile devices
5. **Share the new website** with your network!

---

**Deployment Package Location:** `/home/ubuntu/syndesi-website/dist/public/`

**Questions?** Contact the development team or Plurasites support for assistance.
