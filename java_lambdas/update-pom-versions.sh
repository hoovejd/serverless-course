#!/bin/bash

# This will update the POM dependency verions to the latest release version

mvn versions:use-latest-releases -DgenerateBackupPoms=false

mvn versions:display-plugin-updates