---
path: "/tools"
title: "Tools"
menu: 3
---

This page is meant to be a dynamic collection of various QC tools that are available, with a brief summary of its purpose, how it is meant to be used, what the results are and whether they are open source and free.

If you see a mistake in this description or you don't see your own tool or a tool that you think should belong here, [**please send a pull request (PR) with the changes needed**](https://github.com/INCF/niQC/pull/new/master), or [open an issue](https://github.com/INCF/niQC/issues/new) at the [niQC repo](https://github.com/INCF/niQC). *Thank you for your contribution*.

## Table of Contents
1. [Multimodal](#multimodal)
2. [Anatomical MRI](#anatomical)
3. [Functional MRI](#fmri)
4. [Diffusion MRI](#diffusion)
5. [ASL](#asl)
6. [Scanner/Hardware](#hardware)
7. [Miscellaneous](#misc)

## Multimodal <a name="multimodal"></a>

| Tool                                             | Modalities | Interaction | Technology |Outputs |
|--------------------------------------------------|----------|---------|---------|
| [VisualQC](https://raamana.github.io/visualqc/)  | Various modalities (T1wMRI, fMRI, DWI, Quantitative MR)  | Interactive  | Python  | Plots, reports |

## Anatomical (T1w MRI etc)<a name="anatomical"></a>

| Tool                                             | Purpose | Interaction | Technology | Outputs |
|--------------------------------------------------|----------|---------|---------|---------|
| [VisualQC](https://raamana.github.io/visualqc/)  | Detect and rate artefacts, Accuracy of volumetric or suface segmentations, check alignment  | Interactive | Pure Python | Plots, reports |
| [MindControl](https://github.com/akeshavan/mindcontrol)| Identify outliers, Annotate, Review anatomical accuracy, Edit and correct voxels | Interactive |Python, Javascript|
| [PALS](https://github.com/npnl/pals)|  Checks orientation of stroke T1w MRI + lesion mask inputs, performs lesion correction, calculates lesion load, and automatically outputs QC pages | Interactive |Python| QC pages, reports |
| [Qoala-T](https://github.com/Qoala-T/QC)| Quality rating of FreeSurfer segmentation | Batch Processing | R, FreeSurfer | Qoala-T ratings (0-100), plot + csv file |

## Functional MRI <a name="fmri"></a>

| Tool                                             | Purpose | Interaction |  Technology | Outputs |
|--------------------------------------------------|----------|---------|---------|
| [VisualQC](https://raamana.github.io/visualqc/)  | Detect and rate artefacts, Accuracy of volumetric or suface segmentations, check alignment  | Interactive | Pure python  | Plots, reports |
| [MRIQC](https://mriqc.readthedocs.io/en/stable/) | Generate visulization and reports, identify unusable scans   | Batch processing | Pure python | Plots, reports   |
| [dashQC](http://dashqc-fmri.readthedocs.io)| Visualize distributions of quality metrics, check outliers and alignment| Interactive | JavaScript | Plots, reports|

## Diffusion MRI <a name="diffusion"></a>

| Tool                                             | Purpose | Interaction | Technology |Outputs |
|--------------------------------------------------|----------|---------|---------|
| [DTIprep](https://www.nitrc.org/projects/dtiprep/) | QC | Batch processing| C++ | |
| [eddyqc](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/eddyqc/UsersGuide)| QC | batch processing | C (FSL) | JSON, PDF |
| [ExploreDTI](http://exploredti.com) - sign up required, free for academic research | Visualization and quality assessment| Interactive| Matlab | TBA|
| [VisualQC](https://raamana.github.io/visualqc/)  | Detect and rate various artefacts, check alignment  | Interactive    | Plots, reports |

## Arterial Spin Labeling <a name="asl"></a>

| Tool                                             | Purpose | Interaction | Technology |Outputs |
|--------------------------------------------------|----------|---------|---------|
| [ExploreASL](https://sites.google.com/view/exploreasl) |  image processing and statistics of ASL | Batch processing  | Matlab/SPM  | TBA   |

## Scanner and Hardware QC <a name="hardware"></a>

| Tool                                             | Purpose | Interaction | Technology |Outputs |
|--------------------------------------------------|----------|---------|---------|
| [UniQC](https://github.com/CAIsr/uniQC) | Unified QC of MRI sequence
development and fMRI artefacts| Interactive | Matlab/SPM | Plots /
Interactive Matlab Image objects |

## Miscellaneous <a name="misc"></a>

| Tool                                             | Purpose | Interaction | Technology |Outputs |
|--------------------------------------------------|----------|---------|---------|
|||||
