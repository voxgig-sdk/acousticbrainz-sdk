# Acousticbrainz SDK utility: make_context

from projectname_sdk.core.context import AcousticbrainzContext


def make_context_util(ctxmap, basectx):
    return AcousticbrainzContext(ctxmap, basectx)
