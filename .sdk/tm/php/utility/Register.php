<?php
declare(strict_types=1);

// Acousticbrainz SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AcousticbrainzUtility::setRegistrar(function (AcousticbrainzUtility $u): void {
    $u->clean = [AcousticbrainzClean::class, 'call'];
    $u->done = [AcousticbrainzDone::class, 'call'];
    $u->make_error = [AcousticbrainzMakeError::class, 'call'];
    $u->feature_add = [AcousticbrainzFeatureAdd::class, 'call'];
    $u->feature_hook = [AcousticbrainzFeatureHook::class, 'call'];
    $u->feature_init = [AcousticbrainzFeatureInit::class, 'call'];
    $u->fetcher = [AcousticbrainzFetcher::class, 'call'];
    $u->make_fetch_def = [AcousticbrainzMakeFetchDef::class, 'call'];
    $u->make_context = [AcousticbrainzMakeContext::class, 'call'];
    $u->make_options = [AcousticbrainzMakeOptions::class, 'call'];
    $u->make_request = [AcousticbrainzMakeRequest::class, 'call'];
    $u->make_response = [AcousticbrainzMakeResponse::class, 'call'];
    $u->make_result = [AcousticbrainzMakeResult::class, 'call'];
    $u->make_point = [AcousticbrainzMakePoint::class, 'call'];
    $u->make_spec = [AcousticbrainzMakeSpec::class, 'call'];
    $u->make_url = [AcousticbrainzMakeUrl::class, 'call'];
    $u->param = [AcousticbrainzParam::class, 'call'];
    $u->prepare_auth = [AcousticbrainzPrepareAuth::class, 'call'];
    $u->prepare_body = [AcousticbrainzPrepareBody::class, 'call'];
    $u->prepare_headers = [AcousticbrainzPrepareHeaders::class, 'call'];
    $u->prepare_method = [AcousticbrainzPrepareMethod::class, 'call'];
    $u->prepare_params = [AcousticbrainzPrepareParams::class, 'call'];
    $u->prepare_path = [AcousticbrainzPreparePath::class, 'call'];
    $u->prepare_query = [AcousticbrainzPrepareQuery::class, 'call'];
    $u->result_basic = [AcousticbrainzResultBasic::class, 'call'];
    $u->result_body = [AcousticbrainzResultBody::class, 'call'];
    $u->result_headers = [AcousticbrainzResultHeaders::class, 'call'];
    $u->transform_request = [AcousticbrainzTransformRequest::class, 'call'];
    $u->transform_response = [AcousticbrainzTransformResponse::class, 'call'];
});
