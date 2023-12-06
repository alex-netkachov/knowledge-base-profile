# Updating

This section is for the maintainers of the profile.

## Step 1: Export the profile to a file

In the Visual studio Code click on the profile icon in the bottom left corner and select "Export Profile" option of the currently active profile.

Choose to save the profile to a file and overwrite `Knowledge Base.code-profile`.

## Step 2: Expand the profile

The profile, although it is a JSON file, is not very readable. It also may contain some user-specific data that is need to be removed. Therefore, some post-processing is required.

Run `scripts\expand.js` to make the profile readable.

## Step 3: Review and update

Some settings that vscode exports are user-specific and should be removed.

Open the profile in Visual Studio Code and review the settings.

`scripts\cleanup.js` can be used to remove some settings.

## Step 4: Collapse the profile

Run `scripts\collapse.js` to pack the profile back to the format that vscode expects.
